import {useState} from "react";

function useDadJokeApiLogic() {
    const [joke, setJoke] = useState("");

    const fetchJoke = async () => {
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
        }
    };


    return {
        fetchJoke,
        joke,
    };
}

export default useDadJokeApiLogic;
