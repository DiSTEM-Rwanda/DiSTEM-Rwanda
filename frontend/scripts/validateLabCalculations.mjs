import assert from 'node:assert/strict'
import { constantAcceleration, density, expandedLabModel, freeFall, massConcentration, newtonsSecondLaw, ohmsLaw, particleState, pendulumPeriod, projectileMotion, twoResistorCircuit } from '../src/services/labCalculations.js'

const near = (actual, expected, tolerance = 1e-9) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} is not within ${tolerance} of ${expected}`)
near(ohmsLaw(6, 3).current, 2); near(ohmsLaw(6, 3).power, 12); assert.equal(ohmsLaw(6, 3, false).current, 0)
near(constantAcceleration(2, 1, 3).finalVelocity, 5); near(constantAcceleration(2, 1, 3).position, 10.5)
near(pendulumPeriod(1, 9.8), 2.007089923154493)
const projectile = projectileMotion(20, 45, 9.8); near(projectile.range, 40.816326530612244); near(projectile.maximumHeight, 10.20408163265306)
near(twoResistorCircuit(6, 6, 'Series').totalCurrent, .5); near(twoResistorCircuit(6, 6, 'Parallel').totalCurrent, 2); assert.equal(twoResistorCircuit(6, 6, 'Parallel', false).totalCurrent, 0)
near(density(540, 200), 2.7); near(newtonsSecondLaw(12, 4), 3); near(freeFall(20, 9.8).velocity, Math.sqrt(392)); near(massConcentration(20, 200), .1); assert.equal(particleState(20), 'Solid'); assert.equal(particleState(50), 'Liquid'); assert.equal(particleState(80), 'Gas')
near(expandedLabModel('friction', 20, .3).friction, 6); near(expandedLabModel('hooke', 20, .2).force, 4); near(expandedLabModel('work', 20, 5).work, 100); near(expandedLabModel('wave', 4, 2).speed, 8); near(expandedLabModel('heating', 1, 10).heat, 41.8); near(expandedLabModel('electrical-power', 6, 2).power, 12); near(expandedLabModel('optics', 30, 1.5).reflectionAngle, 30); near(expandedLabModel('magnetism', 5, 5).relativeField, .2); assert.equal(expandedLabModel('ph', 4, 100).indicator, 'Acidic'); near(expandedLabModel('function', 2, 1).yAtFive, 11)
near(expandedLabModel('energy', 5, 2).gravitationalEnergy, 98); near(expandedLabModel('sound', 200, 2).period, .005); near(expandedLabModel('thermal', 80, 3).thermalEnergy, 80); near(expandedLabModel('circuit-builder', 6, 3).current, 2); near(expandedLabModel('optics', 30, 1.5).refractionAngle, 19.47122063449069); near(expandedLabModel('ph', 3, 100).hydrogenIonConcentration, .001); near(expandedLabModel('reaction', 25, 5).relativeRate, 12.5); near(expandedLabModel('microscope', 100, 20).apparentSize, 2000); near(expandedLabModel('ecosystem', 100, 20).preyChange, 8.4)
console.log('Validated laboratory calculations for the bundled simulation library.')
