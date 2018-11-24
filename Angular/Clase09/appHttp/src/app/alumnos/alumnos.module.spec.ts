import { AlumnosModule } from './alumnos.module';

describe('AlumnosModule', () => {
  let alumnosModule: AlumnosModule;

  beforeEach(() => {
    alumnosModule = new AlumnosModule();
  });

  it('should create an instance', () => {
    expect(alumnosModule).toBeTruthy();
  });
});
