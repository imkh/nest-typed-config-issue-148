import { Type } from 'class-transformer';
import { Allow, IsDefined, IsString, ValidateNested } from 'class-validator';

export class DatabaseConfig {
  @IsString()
  public readonly name!: string;
}

export class RootConfig {
  @IsString()
  public readonly myAppUrl!: string;

  @Type(() => DatabaseConfig)
  // @Allow()
  // @IsDefined()
  @ValidateNested()
  public readonly database!: DatabaseConfig;
}
