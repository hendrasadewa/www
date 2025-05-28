import type { ImageDimension, ImageSize } from '../entity/common.entity';

export const imgDimensionBreakpoints: Record<ImageSize, number> = {
	extralarge: 1200,
	large: 720,
	medium: 480,
	small: 320
};

export const imageDimensions: Record<ImageSize, ImageDimension> = {
	extralarge: {
		height: 300,
		width: 300
	},
	large: {
		height: 174,
		width: 174
	},
	medium: {
		height: 64,
		width: 64
	},
	small: {
		height: 34,
		width: 34
	}
};
