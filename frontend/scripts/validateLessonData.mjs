import biologyLessons from '../src/data/biologyLessons.js'
import chemistryLessons from '../src/data/chemistryLessons.js'
import mathematicsLessons from '../src/data/mathematicsLessons.js'
import physicsLessons from '../src/data/physicsLessons.js'
import stemProjectsLessons from '../src/data/stemProjectsLessons.js'
import technologyLessons from '../src/data/technologyLessons.js'
import experiments from '../src/data/virtualLabExperiments.js'
import { getExpandedSimulationDefinition } from '../src/data/expandedSimulationRegistry.js'
import { expandedLabModel } from '../src/services/labCalculations.js'

const datasets = [
  ['Mathematics', mathematicsLessons], ['Physics', physicsLessons], ['Chemistry', chemistryLessons],
  ['Biology', biologyLessons], ['Technology', technologyLessons], ['STEM Projects', stemProjectsLessons],
]
const supportedSectionTypes = new Set(['introduction', 'concept', 'example', 'practice', 'summary', 'activity', 'illustration'])
const supportedSimulationTypes = new Set(['circuit', 'motion', 'concentration', 'particles', 'pendulum', 'projectile', 'network', 'density', 'newton', 'freefall', 'expanded'])
const lessonIds = new Set()
const errors = []

for (const [course, dataset] of datasets) {
  const lessons = Object.values(dataset).flatMap((unit) => unit.lessons || [])
  if (lessons.length === 0) errors.push(`${course}: no lessons found`)
  for (const lesson of lessons) {
    if (!lesson.id) errors.push(`${course}: lesson is missing an id`)
    else if (lessonIds.has(lesson.id)) errors.push(`duplicate lesson id: ${lesson.id}`)
    else lessonIds.add(lesson.id)
    if (lesson.course !== course) errors.push(`${lesson.id || course}: expected course "${course}"`)
    if (!Array.isArray(lesson.sections) || lesson.sections.length === 0) errors.push(`${lesson.id || course}: sections are required`)
    for (const section of lesson.sections || []) {
      if (!supportedSectionTypes.has(section.type)) errors.push(`${lesson.id}: unsupported section type "${section.type}"`)
      if (section.type === 'practice' && (!section.question || !Array.isArray(section.options) || section.options.length < 2 || section.correctAnswer === undefined || !section.options.includes(section.correctAnswer))) errors.push(`${lesson.id}: malformed practice section`)
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  const experimentIds = new Set()
  for (const experiment of experiments) {
    if (!experiment.id || experimentIds.has(experiment.id)) errors.push(`invalid or duplicate experiment id: ${experiment.id || '(missing)'}`)
    else experimentIds.add(experiment.id)
    if (!experiment.title || !experiment.subject || !experiment.conceptExplanation || !experiment.realWorldRelevance || !experiment.explorationPrompt || !Array.isArray(experiment.prerequisites) || !experiment.prerequisites.length || !experiment.simulation?.type || !Array.isArray(experiment.instructions) || experiment.instructions.length === 0 || !experiment.minimumTrials) errors.push(`${experiment.id || 'experiment'}: incomplete experiment data`)
    if (!supportedSimulationTypes.has(experiment.simulation?.type)) errors.push(`${experiment.id || 'experiment'}: unsupported simulation type "${experiment.simulation?.type || '(missing)'}"`)
    if (!experiment.question?.prompt || !Array.isArray(experiment.question.options) || !experiment.question.options.includes(experiment.question.answer)) errors.push(`${experiment.id || 'experiment'}: malformed experiment question`)
    if (!experiment.conclusionQuestion?.prompt || !Array.isArray(experiment.conclusionQuestion.options) || !experiment.conclusionQuestion.options.includes(experiment.conclusionQuestion.answer)) errors.push(`${experiment.id || 'experiment'}: malformed conclusion question`)
    if (experiment.simulation?.type === 'expanded') {
      const { model, primary, secondary } = experiment.simulation
      const definition = getExpandedSimulationDefinition(model)
      if (!definition?.renderer) errors.push(`${experiment.id}: expanded model "${model || '(missing)'}" has no visual renderer mapping`)
      if (definition?.calculationModel !== model) errors.push(`${experiment.id}: expanded model "${model || '(missing)'}" has an invalid calculation mapping`)
      if (!primary || !secondary || !Number.isFinite(primary.initial) || !Number.isFinite(secondary.initial)) errors.push(`${experiment.id}: expanded model inputs are incomplete`)
      else if (Object.keys(expandedLabModel(model, primary.initial, secondary.initial)).length === 0) errors.push(`${experiment.id}: expanded model "${model}" has no local calculation output`)
    }
  }
  if (errors.length) {
    console.error(errors.join('\n'))
    process.exitCode = 1
  } else console.log(`Validated ${lessonIds.size} globally unique bundled lessons and ${experimentIds.size} experiments.`)
}
