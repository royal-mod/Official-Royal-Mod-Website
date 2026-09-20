/* =========================================
   ROYAL MOD
   STEP-BY-STEP ACCESS SYSTEM
========================================= */


/* =========================================
   STEP 1
========================================= */

function subscribeClicked(step) {

    if (step !== 1) {
        return;
    }


    const verifyButton =
        document.getElementById("verify1");


    const timer =
        document.getElementById("timer1");


    /*
       User clicked first YouTube Subscribe.
       Now ONLY Verify #1 unlocks.
    */

    verifyButton.disabled = false;

    verifyButton.classList.add("ready");


    timer.textContent =
        "Ready to verify";

}


/* =========================================
   STEP 2
========================================= */

function unlockStep2() {

    const step =
        document.getElementById("step2");


    const subscribe =
        document.getElementById("subscribe2");


    /*
       Unlock ONLY the second
       YouTube Subscribe button.
    */

    step.classList.remove("locked");

    step.classList.add("active");


    subscribe.classList.remove("disabled");

}


/* =========================================
   STEP 3
========================================= */

function unlockStep3() {

    const step =
        document.getElementById("step3");


    const follow =
        document.getElementById("follow3");


    /*
       Unlock ONLY Instagram Follow.
    */

    step.classList.remove("locked");

    step.classList.add("active");


    follow.classList.remove("disabled");

}


/* =========================================
   SECOND / THIRD ACTION
========================================= */

function enableVerification(step) {

    const verify =
        document.getElementById(
            "verify" + step
        );


    const timer =
        document.getElementById(
            "timer" + step
        );


    if (!verify) {
        return;
    }


    verify.disabled = false;

    verify.classList.add("ready");


    if (timer) {

        timer.textContent =
            "Ready to verify";

    }

}


/* =========================================
   INSTAGRAM FOLLOW
========================================= */

function followClicked() {

    enableVerification(3);

}


/* =========================================
   UNIVERSAL VERIFICATION
========================================= */

function verifyStep(step) {

    const verify =
        document.getElementById(
            "verify" + step
        );


    const timer =
        document.getElementById(
            "timer" + step
        );


    if (!verify || verify.disabled) {
        return;
    }


    /*
       Lock Verify while timer runs.
    */

    verify.disabled = true;

    verify.classList.remove("ready");


    let seconds = 10;


    timer.textContent =
        "Verifying... " +
        seconds +
        "s";


    const countdown =
        setInterval(function () {

            seconds--;


            if (seconds > 0) {

                timer.textContent =
                    "Verifying... " +
                    seconds +
                    "s";

            }


            else {

                clearInterval(
                    countdown
                );


                timer.textContent =
                    "✓ Verification complete";


                finishStep(step);

            }

        }, 1000);

}


/* =========================================
   FINISH STEP
========================================= */

function finishStep(step) {

    const card =
        document.getElementById(
            "step" + step
        );


    /*
       Mark current step completed.
    */

    if (card) {

        card.classList.remove(
            "active"
        );

        card.classList.add(
            "completed"
        );

    }


    /* ===============================
       STEP 1 → STEP 2
    =============================== */

    if (step === 1) {

        unlockStep2();

    }


    /* ===============================
       STEP 2 → STEP 3
    =============================== */

    else if (step === 2) {

        unlockStep3();

    }


    /* ===============================
       STEP 3 → ACCESS
    =============================== */

    else if (step === 3) {

        unlockAccess();

    }

}


/* =========================================
   ACCESS
========================================= */

function unlockAccess() {

    const accessBox =
        document.getElementById(
            "accessBox"
        );


    const accessButton =
        document.getElementById(
            "accessBtn"
        );


    accessBox.classList.remove(
        "locked"
    );


    accessBox.classList.add(
        "completed"
    );


    accessButton.disabled =
        false;


    accessBox.querySelector(
        "h2"
    ).textContent =
        "🔓 Access Unlocked";


    accessBox.querySelector(
        "p"
    ).textContent =
        "All steps have been completed.";

}


/* =========================================
   GET ACCESS
========================================= */

function getAccess() {

    const accessButton =
        document.getElementById(
            "accessBtn"
        );


    if (accessButton.disabled) {
        return;
    }


    window.location.href =
        "./access.html";

}
