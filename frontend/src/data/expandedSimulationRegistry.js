// This registry is the single contract between expanded experiment data,
// locally calculated models, and the visual renderer in VirtualLab.
export const expandedSimulationRegistry = Object.freeze({
  friction: { renderer: 'friction', calculationModel: 'friction' },
  hooke: { renderer: 'hooke', calculationModel: 'hooke' },
  work: { renderer: 'work', calculationModel: 'work' },
  energy: { renderer: 'energy', calculationModel: 'energy' },
  wave: { renderer: 'wave', calculationModel: 'wave' },
  sound: { renderer: 'sound', calculationModel: 'sound' },
  heating: { renderer: 'heating', calculationModel: 'heating' },
  thermal: { renderer: 'thermal', calculationModel: 'thermal' },
  'circuit-builder': { renderer: 'circuit-builder', calculationModel: 'circuit-builder' },
  'electrical-power': { renderer: 'electrical-power', calculationModel: 'electrical-power' },
  optics: { renderer: 'optics', calculationModel: 'optics' },
  magnetism: { renderer: 'magnetism', calculationModel: 'magnetism' },
  ph: { renderer: 'ph', calculationModel: 'ph' },
  reaction: { renderer: 'reaction', calculationModel: 'reaction' },
  microscope: { renderer: 'microscope', calculationModel: 'microscope' },
  ecosystem: { renderer: 'ecosystem', calculationModel: 'ecosystem' },
  function: { renderer: 'function', calculationModel: 'function' },
})

export function getExpandedSimulationDefinition(model) {
  return expandedSimulationRegistry[model] || null
}
