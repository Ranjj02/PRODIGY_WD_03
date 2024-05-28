$(document).ready(function () {
    var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    var turn = "X";
    var gameOn = false;
    var count = 0;

    $("#message").html("Player " + turn + " gets to start!");

    function playerTurn(id) {
        var spotTaken = $("#" + id).text();
        if (spotTaken === "#") {
            count++;
            turns[id] = turn;
            $("#" + id).text(turn);
            winCondition(turns, turn);
            // Switch turns only after a valid move
            turn = turn === "X" ? "O" : "X";
            $("#message").html("It's " + turn + "'s turn.");
            console.log("Next turn is: " + turn); // Debug statement to track the turn
        }
    }

    function winCondition(trackMoves, currentMove) {
        if (trackMoves[0] === currentMove && trackMoves[1] === currentMove && trackMoves[2] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[4] === currentMove && trackMoves[6] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[3] === currentMove && trackMoves[6] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[4] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[1] === currentMove && trackMoves[4] === currentMove && trackMoves[7] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[3] === currentMove && trackMoves[4] === currentMove && trackMoves[5] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[6] === currentMove && trackMoves[7] === currentMove && trackMoves[8] === currentMove) {
            gameOn = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (!(trackMoves.includes("#"))) {
            gameOn = true;
            reset();
            alert("It is a Draw!");
        } else {
            gameOn = false;
        }
    }

    $(".tic").click(function () {
        var slot = $(this).attr('id');
        playerTurn(slot);
    });

    function reset() {
        turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
        count = 0;
        $(".tic").text("#");
        gameOn = false;
        turn = "X";  // Reset turn to "X"
        $("#message").html("Player " + turn + " gets to start!");
    }

    $("#reset").click(function () {
        reset();
    });
});
