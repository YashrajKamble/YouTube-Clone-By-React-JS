import './Recommended.css'
import { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../../data'

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([])

    const fetchData = async () => {
        const relatedVideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

        await fetch(relatedVideo_url)
            .then(res => res.json())
            .then(data => setApiData(data.items))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='recommended'>
            <>
                {apiData && Array.isArray(apiData) && apiData.length > 0 ? (
                    apiData.map((item, index) => (
                        <div key={index} className="side-video-list">
                            <img src={item.snippet.thumbnail.medium.url} alt="" />
                            <div className="vid-info">
                                <h4>{item.snippet.title}</h4>
                                <p>{item.snippet.channelTitle}</p>
                                <p>{value_converter(item.statistics.viewCount)} Views</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No data available</p> // Fallback if apiData is empty or undefined
                )}
            </>

        </div>
    )
}

export default Recommended