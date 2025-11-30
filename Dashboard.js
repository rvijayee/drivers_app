import React, { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Card, Button } from "./UI";

export function Dashboard() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Header />
            <StatsCard count={count} />
            <Card>
                <Button onClick={() => setCount(count + 1)}>Increment</Button>
            </Card>
            <Footer />
        </div>
    );
}

export const StatsCard = React.memo(function StatsCard({ count }) {
    return (
        <section>
            <h2>Stats Info</h2>
            <CountDisplay value={count} />
        </section>
    );
});

export const CountDisplay = React.forwardRef(function CountDisplay(
    { value },
    ref
) {
    return <span ref={ref}>{value}</span>;
});
