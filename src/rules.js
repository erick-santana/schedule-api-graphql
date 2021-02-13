const rules = [
    {
        "id": 1,
        "daily": null,
        "weekly": null,
        "day": "02-02-2020",
        "daysWeek": [],
        "intervals": [
            { "start": "14:30", "end": "15:20" },
            { "start": "15:30", "end": "16:00" }
        ]
    },
    {
        "id": 2,
        "daily": null,
        "weekly": true,
        "day": null,
        "daysWeek": [
            {"day": "monday"},
            {"day": "wednesday"},
        ],
        "intervals": [
            { "start": "08:00", "end": "11:30" }
        ]
    },
    {
        "id": 3,
        "daily": true,
        "weekly": null,
        "day": null,
        "daysWeek": [],
        "intervals": [
            { "start": "13:30", "end": "14:00" }
        ]
    }
];

module.exports = rules;