import { NucleoModule } from './nucleo.module';

describe('NucleoModule', () => {
  let nucleoModule: NucleoModule;

  beforeEach(() => {
    nucleoModule = new NucleoModule();
  });

  it('should create an instance', () => {
    expect(nucleoModule).toBeTruthy();
  });
});
