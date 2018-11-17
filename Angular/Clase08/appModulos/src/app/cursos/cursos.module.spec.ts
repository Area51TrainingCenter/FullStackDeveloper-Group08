import { CursosModule } from './cursos.module';

describe('CursosModule', () => {
  let cursosModule: CursosModule;

  beforeEach(() => {
    cursosModule = new CursosModule();
  });

  it('should create an instance', () => {
    expect(cursosModule).toBeTruthy();
  });
});
