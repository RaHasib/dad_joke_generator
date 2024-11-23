import {useState} from "react";

function useDadJokeApiLogic() {
    const [joke, setJoke] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchJoke = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch joke");
            }

            const data = await response.json();
            setJoke(data.joke);

        } catch (error) {
            console.error(error.message);
            setJoke("Error fetching joke. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        fetchJoke,
        joke,
        isLoading,
    };
}

export default useDadJokeApiLogic;
