import { useState } from 'react'
import './styles/table-portions.css'
import './styles/table-cupcake.css'
import './styles/table-total.css'

export const App = () => {
  const [portions, setportions] = useState(125)
  const psugar = Math.round(portions * 12 * 100) / 100 // Redondeado a 2 decimales
  const pemulsifier = Math.round(portions * 0.6 * 100) / 100 // Redondeado a 2 decimales
  const psalt = Math.round(portions * 0.2 * 100) / 100 // Redondeado a 2 decimales
  const peggs = Math.round(((portions * 14.4) / 60) * 100) / 100 // Redondeado a 2 decimales
  const pbutter = Math.round(portions * 8 * 100) / 100 // Redondeado a 2 decimales
  const pessence = Math.round(portions * 0.6 * 100) / 100 // Redondeado a 2 decimales
  const pmilk = Math.round(portions * 11.2 * 100) / 100 // Redondeado a 2 decimales
  const pflour = Math.round(portions * 20 * 100) / 100 // Redondeado a 2 decimales
  const pbakingPowder = Math.round(portions * 1 * 100) / 100 // Redondeado a 2 decimales
  const psparks = Math.round(portions * 2.8 * 100) / 100 // Redondeado a 2 decimales

  const [cupcakes, setCupcakes] = useState(6)
  const csugar = Math.round(cupcakes * 8 * 100) / 100
  const cemulsifier = Math.round(cupcakes * 0.4 * 100) / 100
  const csalt = Math.round(cupcakes * 0.133333333 * 100) / 100
  const ceggs = Math.round(((cupcakes * 10) / 60) * 100) / 100
  const cbutter = Math.round(cupcakes * 5.33333333 * 100) / 100
  const cessence = Math.round(cupcakes * 0.4 * 100) / 100
  const cmilk = Math.round(cupcakes * 7.466666666 * 100) / 100
  const cflour = Math.round(cupcakes * 13.3333333 * 100) / 100
  const cbakingPowder = Math.round(cupcakes * 0.6666666666 * 100) / 100
  // const csparks = 0
  const mass = (
    csugar +
    cemulsifier +
    csalt +
    ceggs * 55 +
    cbutter +
    cessence +
    cmilk +
    cflour +
    cbakingPowder
  ).toFixed(2)

  const tsugar = csugar + psugar
  const temulsifier = cemulsifier + pemulsifier
  const tsalt = csalt + psalt
  const teggs = ceggs + peggs
  const tbutter = cbutter + pbutter
  const tessence = cessence + pessence
  const tmilk = cmilk + pmilk
  const tflour = cflour + pflour
  const tbakingPowder = cbakingPowder + pbakingPowder
  const tsparks = Math.round(portions * 2.8 * 100) / 100

  return (
    <div className="app">
      <div className="table_portions">
        <div className="table_portions-title">
          <div>Porciones</div>
          <div>
            <input
              type="number"
              defaultValue={portions}
              onChange={(e) => setportions(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="table_portions-content">
          <div>Azucar</div>
          <div className="table_portions-amount">
            <input type="number" value={psugar} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_portions-content">
          <div>Emulsionante</div>
          <div className="table_portions-amount">
            <input type="number" value={pemulsifier} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_portions-content">
          <div>Sal</div>
          <div className="table_portions-amount">
            <input type="number" value={psalt} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_portions-content">
          <div>Huevos</div>
          <div className="table_portions-amount">
            <input type="number" value={peggs} />
            <div>und</div>
          </div>
        </div>

        <div className="table_portions-content">
          <div>Mantequilla</div>
          <div className="table_portions-amount">
            <input type="number" value={pbutter} />
            <div>gr</div>
          </div>
        </div>

        <div className="table_portions-content">
          <div>Esencia</div>
          <div className="table_portions-amount">
            <input type="number" value={pessence} />
            <div>ml</div>
          </div>
        </div>

        <div className="table_portions-content">
          <div>Leche</div>
          <div className="table_portions-amount">
            <input type="number" value={pmilk} />
            <div>ml</div>
          </div>
        </div>

        <div className="table_portions-content">
          <div>Harina</div>
          <div className="table_portions-amount">
            <input type="number" value={pflour} />
            <div>gr</div>
          </div>
        </div>

        <div className="table_portions-content">
          <div>Polvo de H.</div>
          <div className="table_portions-amount">
            <input type="number" value={pbakingPowder} />
            <div>gr</div>
          </div>
        </div>

        <div className="table_portions-content">
          <div>Chispas</div>
          <div className="table_portions-amount">
            <input type="number" value={psparks} />
            <div>gr</div>
          </div>
        </div>
      </div>
      <div className="table_cupcakes">
        <div className="table_cupcakes-title">
          <div>Cupcakes</div>
          <div>
            <input
              type="number"
              defaultValue={cupcakes}
              onChange={(e) => setCupcakes(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="table_cupcakes-content">
          <div>Azucar</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={csugar} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Emulsionante</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={cemulsifier} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Sal</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={csalt} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Huevos</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={ceggs} />
            <div>und</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Mantequilla</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={cbutter} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Esencia</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={cessence} />
            <div>ml</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Leche</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={cmilk} />
            <div>ml</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Harina</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={cflour} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>Polvo de H.</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={cbakingPowder} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_cupcakes-content">
          <div>PESO MASA</div>
          <div className="table_cupcakes-amount">
            <input type="number" value={mass} />
          </div>
        </div>
      </div>
      <div className="table_total">
        <div className="table_total-title">
          <div>Total</div>
        </div>

        <div className="table_total-content">
          <div>Azucar</div>
          <div className="table_total-amount">
            <input type="number" value={tsugar} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Emulsionante</div>
          <div className="table_total-amount">
            <input type="number" value={temulsifier} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Sal</div>
          <div className="table_total-amount">
            <input type="number" value={tsalt} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Huevos</div>
          <div className="table_total-amount">
            <input type="number" value={teggs} />
            <div>und</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Mantequilla</div>
          <div className="table_total-amount">
            <input type="number" value={tbutter} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Esencia</div>
          <div className="table_total-amount">
            <input type="number" value={tessence} />
            <div>ml</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Leche</div>
          <div className="table_total-amount">
            <input type="number" value={tmilk} />
            <div>ml</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Harina</div>
          <div className="table_total-amount">
            <input type="number" value={tflour} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Polvo de H.</div>
          <div className="table_total-amount">
            <input type="number" value={tbakingPowder} />
            <div>gr</div>
          </div>
        </div>
        <div className="table_total-content">
          <div>Chispas</div>
          <div className="table_total-amount">
            <input type="number" value={tsparks} />
            <div>gr</div>
          </div>
        </div>
      </div>
    </div>
  )
}
