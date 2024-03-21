// config.ts in your library
export class Config {
 static instance: Config;
 language: string;
 timeZone: string;

 private constructor(language: string, timeZone: string) {
    this.language = language;
    this.timeZone = timeZone;
 }

 static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config('en-US', 'UTC'); // Default values
    }
    return Config.instance;
 }

 setLanguage(language: string): void {
    this.language = language;
 }

 setTimeZone(timeZone: string): void {
    this.timeZone = timeZone;
 }
}

export const config = Config.getInstance();
