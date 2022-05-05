const missionCommander = require('./../app/missionCommander')
describe("Unit Tests for Mission Commander Class", () => {
    test('Caso de prueba 1: Creación de objeto', () => {

      //aqui puedes usar el código como lo desea utilizar
        const woopa = new missionCommander("Woopa")

      // validar el resultado esperando
        expect(woopa.name).toBe("Woopa");
    });
  })
