const { buildTeam, startBuild, renderEmployees, generateTeamHTML } = require("./lib/getTeamData");
const greetUser = require('./lib/greetUser')

const init = async () => {
    try {
        greetUser();
        const start = await startBuild();
        if (start !== "Start") {
            return
        } 
        await buildTeam();
        const teamDetails = await renderEmployees();
        generateTeamHTML(teamDetails);
        console.log('=== Profile Generated ===');
    } catch (err) {
        console.error("There has been an error forming the team: ", err);
    }
}

init();