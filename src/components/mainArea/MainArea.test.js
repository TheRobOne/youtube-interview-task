import { render, screen } from '@testing-library/react';
import MainArea from './MainArea';

const video = {
    id: {
        videoId: 'fake_id'
    },
    snippet: {
        title: 'title',
        description: 'description'
    }
}

test('renders MainArea with video', () => {
    render(<MainArea video={video}/>);
    const player = screen.getByTitle('YouTube video player');
    expect(player).toBeInTheDocument();
})
