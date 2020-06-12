import { TdmOpModule } from './tdm-op.module';

describe('TdmMilkModule', () => {
  let tdmOpModule: TdmOpModule;

  beforeEach(() => {
    tdmOpModule = new TdmOpModule();
  });

  it('should create an instance', () => {
    expect(tdmOpModule).toBeTruthy();
  });
});
 