import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/common/Text';

const meta = {
  component: Text,
  title: 'Common/Text',
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: '장바구니 텍스트',
    size: '16px',
    weight: 'normal',
    $color: '#33333',
  },
};

export const Medium: Story = {
  args: {
    children: '장바구니 텍스트',
    size: '20px',
    weight: 'normal',
    $color: '#33333',
  },
};

export const Large: Story = {
  args: {
    children: '장바구니 텍스트',
    size: '24px',
    weight: 'normal',
    $color: '#33333',
  },
};

export const Bold: Story = {
  args: {
    children: '장바구니 텍스트',
    size: '24px',
    weight: '900',
    $color: '#33333',
  },
};
