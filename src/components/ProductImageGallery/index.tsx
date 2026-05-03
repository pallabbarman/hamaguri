'use client';
import { Box, IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
    images: string[];
};

const THUMB_SIZE = 120;

const ProductImageGallery: React.FC<Props> = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <Stack spacing={2}>
            <Box sx={{ textAlign: 'center' }}>
                <Image
                    src={activeImage}
                    alt="product"
                    height={450}
                    width={450}
                    loading="lazy"
                    style={{ objectFit: 'cover', width: '100%' }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    overflowX: 'auto',
                    py: 1,
                    '&::-webkit-scrollbar': {
                        height: 6,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'grey.400',
                        borderRadius: 4,
                    },
                }}
            >
                {images.map((img) => (
                    <IconButton
                        key={img}
                        onClick={() => setActiveImage(img)}
                        sx={{
                            p: 0,
                            borderRadius: 1,
                            border: activeImage === img ? '2px solid' : '1px solid',
                            borderColor: activeImage === img ? 'primary.main' : 'divider',
                        }}
                    >
                        <Box
                            component="img"
                            src={img}
                            alt="thumbnail"
                            sx={{
                                width: THUMB_SIZE,
                                height: THUMB_SIZE,
                                objectFit: 'cover',
                                borderRadius: 1,
                            }}
                        />
                    </IconButton>
                ))}
            </Box>
        </Stack>
    );
};

export default ProductImageGallery;
