import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductCard from './ProductCard';

export default {
    title: 'ProductCard',
    component: ProductCard,
    argTypes: {
        type: {
            control: 'radio',
            options: ['default', 'hover', 'shopping', 'wishlist']
        },
    },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} />

export const Default = Template.bind({});
Default.args = {
    item: {
        id: 0,
        title: "Title",
        description: "description",
        price: "999",
    }
}

export const HoverType = Template.bind({});
HoverType.args = {
    type: 'hover',
    item: {
        id: 0,
        title: "Title",
        description: "description",
        price: "999",
    }
}