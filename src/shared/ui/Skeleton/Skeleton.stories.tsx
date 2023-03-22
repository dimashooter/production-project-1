import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,

};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
export const InvertedNormal = Template.bind({});
InvertedNormal.args = {
    width: '100%',
    height: 200,
};
InvertedNormal.decorators = [ThemeDecorator(Theme.DARK)];
export const InvertedCircle = Template.bind({});
InvertedCircle.args = {
    border: '50%',
    width: 100,
    height: 100,
};
InvertedCircle.decorators = [ThemeDecorator(Theme.DARK)];
