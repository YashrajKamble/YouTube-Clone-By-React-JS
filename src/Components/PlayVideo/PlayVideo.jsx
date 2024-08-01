import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best YouTube Channel To Learn Web Development </h3>
            <div className='play-video-info'>
                <p>4522 views &bull; 2 days ago</p>
                <div >
                    <span><img src={like} alt="like" />124</span>
                    <span><img src={dislike} alt="dislike" /></span>
                    <span><img src={share} alt="share" />share</span>
                    <span><img src={save} alt="save" />save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subscriber</span>
                </div>
                <button>Subscriber</button>
            </div>

            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to watch more tutorials on web development </p>
                <hr />
                <h4>132 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson</h3>
                        <p>Explain Well</p>
                        <div className="comment-section">
                            <img src={like} alt=" " />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to watch more tutorials on web development </p>
                <hr />
                <h4>132 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson</h3>
                        <p>Explain Well</p>
                        <div className="comment-section">
                            <img src={like} alt=" " />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to watch more tutorials on web development </p>
                <hr />
                <h4>132 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson</h3>
                        <p>Explain Well</p>
                        <div className="comment-section">
                            <img src={like} alt=" " />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to watch more tutorials on web development </p>
                <hr />
                <h4>132 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson</h3>
                        <p>Explain Well</p>
                        <div className="comment-section">
                            <img src={like} alt=" " />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to watch more tutorials on web development </p>
                <hr />
                <h4>132 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson</h3>
                        <p>Explain Well</p>
                        <div className="comment-section">
                            <img src={like} alt=" " />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to watch more tutorials on web development </p>
                <hr />
                <h4>132 Comments</h4>

                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack Nicholson</h3>
                        <p>Explain Well</p>
                        <div className="comment-section">
                            <img src={like} alt=" " />
                            <span>244</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlayVideo