const MainContent = () => {
    return(
        <>
            <div className="blankContainer main-tab"></div>
            <div className="contentContainer main-tab">
                <div className="content-heading">
                    <p>
                        Heading e.g., Serving Content Using a Fully Managed Reverse Proxy Architecture
                    </p>
                </div>
                <div className="content-time">
                    <p>
                        18 Nov 2020 | by Leonardo Machado and Kilian Ruess | in AWS Architecture Blog
                    </p>
                </div>
                <div className="content-description">
                    <p>
                        We present a simple but powerful architecture of convolutional neural network, which has a VGG-like inference-time composed of nothing but a stack of 3x3 convolution and ReLU, while the training-time model has a multi-branch topology.[...]
                    </p>
                </div>
                <div className="content-tags">
                    <div>Cloud</div>
                    <div>Java</div>
                    <div>Microservices</div>
                </div>
            </div>
            <div className="statsContainer main-tab">
                <div><span>★</span> 20</div>
                <div>100 Comments</div>
                <div>Blog</div>
            </div>   
        </>
    )
}

export default MainContent;