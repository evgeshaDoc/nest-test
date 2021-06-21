import { IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  name: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  rating: string;

  @IsString()
  productId: string;
}
