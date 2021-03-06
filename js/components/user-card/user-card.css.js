const html = e => e

export default html`
    <style>
        .user-card {
            font-family: Arial;
            background: #666;
            width: 50vmin;
            display: grid;
            grid-template-columns: 1.5fr 2fr;
            grid-gap: 1em;
            margin-bottom: .75em;
            padding: .5em;
            border-radius: 0 .5em;
            border-bottom: darkorchid 1vmin solid;
        }
        h1 {
            font-weight: bold;
            font-size: 1.5em;
        }
        button {
            cursor: pointer;
            background: darkorchid;
            color: white;
            border: 0;
            border-radius: .25em;
            padding: .5em 1em;
        }
    </style>
`