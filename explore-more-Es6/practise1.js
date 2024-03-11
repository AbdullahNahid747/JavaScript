let data = {
    sophia: {
        id: 33,
        study: [
            {
                primary: [
                    {school_name: "ABC primary school"},
                    {location: "Petersburg"}
                ]
            }, // Added comma here
            {
                secondary: [
                    {school_name: "ABC secondary school"}, // Changed primary to secondary
                    {location: "Petersburg"}
                ]
            } // Removed comma here
        ]
    }
};

console.log(data.sophia.study[1].secondary);
