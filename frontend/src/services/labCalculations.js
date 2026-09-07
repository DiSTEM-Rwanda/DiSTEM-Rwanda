export function ohmsLaw(voltage, resistance, closed = true) {
  const current = closed ? voltage / resistance : 0
  return { current, power: voltage * current }
}

export function constantAcceleration(initialVelocity, acceleration, time) {
  return { finalVelocity: initialVelocity + acceleration * time, position: initialVelocity * time + 0.5 * acceleration * time ** 2 }
}

export function pendulumPeriod(length, gravity) { return 2 * Math.PI * Math.sqrt(length / gravity) }

export function projectileMotion(velocity, angleDegrees, gravity, launchHeight = 0) {
  const angle = angleDegrees * Math.PI / 180
  const horizontalVelocity = velocity * Math.cos(angle)
  const verticalVelocity = velocity * Math.sin(angle)
  const time = (verticalVelocity + Math.sqrt(verticalVelocity ** 2 + 2 * gravity * launchHeight)) / gravity
  return { time, range: horizontalVelocity * time, maximumHeight: launchHeight + verticalVelocity ** 2 / (2 * gravity), horizontalVelocity, verticalVelocity }
}

export function twoResistorCircuit(voltage, resistance, mode, closed = true) {
  const totalResistance = mode === 'Series' ? resistance * 2 : resistance / 2
  return { totalResistance, totalCurrent: closed ? voltage / totalResistance : 0 }
}

export function density(mass, volume) { return mass / volume }
export function newtonsSecondLaw(force, mass) { return force / mass }
export function freeFall(height, gravity) { const time = Math.sqrt(2 * height / gravity); return { time, velocity: gravity * time } }
export function massConcentration(solute, volume) { return solute / volume }
export function particleState(energy) { return energy < 34 ? 'Solid' : energy < 67 ? 'Liquid' : 'Gas' }

// Simplified, local educational models for the expanded simulation library.
export function expandedLabModel(model, primary, secondary) {
  if (model === 'friction') return { force: primary, coefficient: secondary, friction: primary * secondary, acceleration: (primary - primary * secondary) / 10 }
  if (model === 'hooke') return { springConstant: primary, extension: secondary, force: primary * secondary }
  if (model === 'energy') return { height: primary, mass: secondary, gravitationalEnergy: primary * secondary * 9.8, kineticEnergy: primary * secondary * 9.8 }
  if (model === 'work') return { force: primary, distance: secondary, work: primary * secondary, power: primary * secondary / 5 }
  if (model === 'wave') return { frequency: primary, wavelength: secondary, speed: primary * secondary }
  if (model === 'sound') return { frequency: primary, amplitude: secondary, period: 1 / primary }
  if (model === 'heating') return { mass: primary, temperatureChange: secondary, heat: primary * 4.18 * secondary }
  if (model === 'thermal') return { thermalEnergy: primary, particleSpacing: secondary, state: particleState(primary) }
  if (model === 'circuit-builder') return { voltage: primary, resistance: secondary, current: primary / secondary, power: primary ** 2 / secondary }
  if (model === 'electrical-power') return { voltage: primary, current: secondary, power: primary * secondary, resistance: primary / secondary }
  if (model === 'optics') return { incidenceAngle: primary, refractiveIndex: secondary, reflectionAngle: primary, refractionAngle: Math.asin(Math.min(1, Math.sin(primary * Math.PI / 180) / secondary)) * 180 / Math.PI }
  if (model === 'magnetism') return { distance: primary, magnetStrength: secondary, relativeField: secondary / primary ** 2, compassDeflection: Math.min(90, secondary * 10 / primary) }
  if (model === 'ph') return { ph: primary, volume: secondary, hydrogenIonConcentration: 10 ** -primary, indicator: primary < 7 ? 'Acidic' : primary > 7 ? 'Basic' : 'Neutral' }
  if (model === 'reaction') return { temperature: primary, concentration: secondary, relativeRate: primary * concentrationFactor(secondary), collisionEnergy: primary / 10 }
  if (model === 'microscope') return { magnification: primary, cellSize: secondary, apparentSize: primary * secondary, structure: primary >= 400 ? 'Nucleus and cell wall visible' : 'Cell outline visible' }
  if (model === 'ecosystem') return { prey: primary, predators: secondary, preyChange: primary * .12 - secondary * .18, predatorFoodRatio: primary / secondary }
  if (model === 'function') return { slope: primary, intercept: secondary, yAtZero: secondary, yAtFive: primary * 5 + secondary }
  return {}
}

function concentrationFactor(value) { return value / 10 }
