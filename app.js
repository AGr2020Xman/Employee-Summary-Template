const { buildTeam, startBuild, generateTeamHTML } = require("./lib/getTeamData");
const greetUser = require('./lib/greetUser')

const init = async () => {
    try {
        greetUser();
        const start = await startBuild();
        if (start !== "Start") {
            return
        } buildTeam();
        const teamDetails = await renderEmployees();
        generateTeamHTML(teamDetails);
    } catch (err) {
        if (err) "There has been an error forming the team: "
    }
}

init();