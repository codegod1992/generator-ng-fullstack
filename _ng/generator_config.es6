export class GeneratorConfig {
  static KEY_SERVER = "server";
  static KEY_USERNAME = 'username';
  static KEY_APP_NAME = 'appName';
  static KEY_TRANSPILER_SERVER = 'transpilerServer';
  static canCreate = false;
  static instance;

  constructor(generator) {
    if (!GeneratorConfig.canCreate) {
      throw new Error('Use getInstance(generator) instead.');
    }

    this.server = 'node';
    this.username = undefined;
    this.appName = undefined;
    this.transpilerServer = undefined;
    this.wrapper = generator;
  }

  static getInstance(generator) {
    GeneratorConfig.canCreate = true;
    GeneratorConfig.instance = GeneratorConfig.instance || new GeneratorConfig(generator);
    GeneratorConfig.canCreate = false;

    return GeneratorConfig.instance;
  }

  withServer(s) {
    this.server = s;
    this.set(GeneratorConfig.KEY_SERVER, s);
    return this;
  }

  withUsername(u) {
    this.username = u;
    this.set(GeneratorConfig.KEY_USERNAME, u);
    return this;
  }

  withAppName(a) {
    this.appName = a;
    this.set(GeneratorConfig.KEY_APP_NAME, a);
    return this;
  }

  withTranspilerServer(t) {
    this.transpilerServer = t;
    this.set(GeneratorConfig.KEY_TRANSPILER_SERVER, t);
    return this;
  }

  set(key, info) {
    this.wrapper.config.set(key, info);
  }

  get(key) {
    return this.wrapper.config.get(key);
  }

  save(key, info) {
    this.wrapper.config.save();
  }
}
