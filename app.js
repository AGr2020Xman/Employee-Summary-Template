const path = require("path");
const { buildTeam, startBuild, generateTeamHTML } = require("./lib/getTeamData");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const init = async () => {
    try {
        greetUser();
        const start = startBuild();
        if (start !== "Start") {
            return "=== Come back later to build your team. Bye for now! ==="
        } buildTeam();
        const teamDetails = await renderEmployees();
        generateTeamHTML(teamDetails);
    } catch (err) {
        if (err) "There has been an error forming the team: "
    }
}

init();