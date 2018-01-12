/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */
var time = 60;
while (time>=0) {
    var result
    switch (time) {
        case 50: result = "Orbiter transfers from ground to internal power"; break;
        case 31: result = "Ground launch sequencer is go for auto sequence start"; break;
        case 16: result = "Activate launch pad sound suppression system"; break;
        case 10: result = "Activate main engine hydrogen burnoff system"; break;
        case 6: result = "Main engine start"; break;
        case 0: result = "Solid rocket booster ignition and liftoff!"; break;
        default: result = "T-" + time + " seconds"; break;
    }
    console.log(result)
    time--
}
