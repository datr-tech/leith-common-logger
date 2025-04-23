import { logger } from '@app-lcl/logger';

describe('logger', () => {
  describe('positive', () => {
    test('should contain the expected logger object', () => {
      const { info } = logger;
      expect(info).toBeTruthy();
      expect(typeof info === 'function').toBe(true);
    });
  });
});
