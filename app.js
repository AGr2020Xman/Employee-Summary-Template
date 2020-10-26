const { buildTeam, startBuild, generateTeamHTML } = require("./lib/getTeamData");
const greetUser = require('./lib/greetUser')

const init = async () => {
    try {
        greetUser();
        const start = await startBuild();
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