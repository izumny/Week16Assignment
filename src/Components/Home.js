import React from 'react';
import Card from 'react-bootstrap/Card'

function Home() {
    return (
        <div>
            <header className="header--home">
            <h4>This is YOUR Closet App!</h4>
            </header>
            <main className="main--home">
            <Card className="card--home">
                <Card.Body>
                    <Card.Text>Are you aware of ALL clothes you have in your closet?</Card.Text>
                    <Card.Text>Have you found out you bought similar clothes you already had?</Card.Text>
                    <Card.Text>Do you have any clothes that you bought before but never wear them yet?</Card.Text>
                </Card.Body>
            </Card>
            </main>
            <footer className="footer--home">
            <h4>Yes, yes YES ??? then this app is FOR YOU!</h4>
            <h4>Let's manage your clothes in your closet with this App!</h4>
            </footer>
        </div>
    )
}
export default Home; 