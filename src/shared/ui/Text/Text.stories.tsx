import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextField = Template.bind({});
TextField.args = {
    children: 'Text',
    text: 'Text example',
    title: 'Title example',
};

export const InvertedText = Template.bind({});
InvertedText.args = {
    children: 'Text',
    text: 'Text example',
    title: 'Title example',
};
InvertedText.decorators = [ThemeDecorator(Theme.DARK)];
