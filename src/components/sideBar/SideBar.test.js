import { render, screen } from '@testing-library/react';
import SideBar from './SideBar';

const videos = [
    {
        id: {
            videoId: 'fake_id'
        },
        snippet: {
            title: 'title',
            thumbnails: {
                medium: {
                    url: 'http://example.com',
                    width: '320px',
                    height: '180px'
                }
            }
        }
    },
    {
        id: {
            videoId: 'fake_id'
        },
        snippet: {
            title: 'title',
            thumbnails: {
                medium: {
                    url: 'http://example.com',
                    width: '320px',
                    height: '180px'
                }
            }
        }
    }
]

test('renders SideBar with videos list', () => {
    render(<SideBar videos={videos}/>);
    const videosList = screen.getAllByAltText('video thumbnail');
    expect(Array.isArray(videosList)).toBeTruthy();
})
