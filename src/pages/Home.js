import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



// will turn this blog design into its own component 

function Home(){
    return(
        <main style={styles.blogContainer}>
            <div style={styles.blogPost}>
                <h2 style={styles.blogPostTitle}>AI</h2>
                <p style={styles.blogPostDate}>Published on January 1, 2023</p>
                <div style={styles.blogPostContent}>
                    <p>My opinion on AI</p>
                </div>

                <Link to='/AiBlog'><Button variant="primary">View Blog Post</Button></Link>
            </div>

            <div style={styles.blogPost}>
                <h2 style={styles.blogPostTitle}>Cyber Security</h2>
                <p style={styles.blogPostDate}>Published on January 2, 2023</p>
                <div style={styles.blogPostContent}>
                    <p>A look at Cyber Security</p>
                </div>
                <Link to='/CyberSecurity'><Button variant="primary">View Blog Post</Button></Link>
            </div>
            <div style={styles.blogPost}>
                <h2 style={styles.blogPostTitle}>Virtual Reality</h2>
                <p style={styles.blogPostDate}>Published on January 3, 2023</p>
                <div style={styles.blogPostContent}>
                    <p>VR and where it needs to improve</p>
                </div>
                <Link to='/VR'><Button variant="primary">View Blog Post</Button></Link>
            </div>
        </main>
    )
}

export default Home;

const styles = {
    blogContainer:{
        marginTop:'10px'
    },
    blogPost:{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        border: '1px solid #ddd',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '20px',
        width: '500px'
    },
    blogPostTitle:{
        fontSize: '24px',
        marginTop: '0',
    },
    blogPostDate:{
        color: '#888',
        marginBottom: '10px'
    },
    blogPostContent:{
        marginBottom:'15px'
    }
}

