import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class RefreshTokenRequestDto {
  @ApiProperty({ name: 'refresh_token', type: String, example: '' })
  @Expose({ name: 'refresh_token' })
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}
