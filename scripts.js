/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// construct Project class
class Project {
    constructor(title, description, features, image, link) {
        this.title = title;
        this.description = description;
        this.features = features;
        this.image = image;
        this.link = link;
    }
}

// array of Project objects
const projects = [
    new Project(
        "Sheep Herding in C#",
        "A sheep herding game in C# that can be played in terminal with in-game music.",
        ["C#"],
        "SheepHerding.png",
        "https://github.com/jstnguyen/SheepHerdingInCSharp"
    ),
    new Project(
        "Spotted.",
        "Study space reservation app, Spotted., for HackDavis Spring 2022.",
        ["HTML", "CSS", "Figma"],
        "Spotted.png",
        "https://github.com/jstnguyen/Spotted"
    ),
    new Project(
        "Atari Q Learner In Python",
        "This project uses the Q-learning algorithm and Pytorch in order beat Atari games by finding an optimal policy that converges to a maximal reward.",
        ["AI", "Python", "PyTorch", "NumPy", "ROM"],
        "Pong.png",
        "https://github.com/jstnguyen/AtariQLearnerInPython"
    ),
    new Project(
        "A Star Search Algorithm",
        "A* Search Algorithm that finds the optimal path throughout a weighted terrain implemented with Python, NumPy, and Matplotlib. Includes Dijkstra's algorithm.",
        ["AI", "Python", "NumPy", "Matplotlib"], 
        "AStar.png",
        "https://github.com/jstnguyen/AStarSearchAlgorithm"
    ),
    new Project(
        "Child Support Data Analysis",
        "Data analysis of child support using R, ggplot2, and dplyr.",
        ["R", "ggplot2", "dplyr"],
        "ChildSupport.png",
        "https://github.com/jstnguyen/ChildSupportDataAnalysis"
    ),
    new Project(
        "Diabetes Predictive Model",
        "Our project focuses on developing a predictive model to diagnose diabetes using machine learning techniques. We aim to enhance the accuracy of diabetes diagnosis by utilizing patients' demographic information and medical history.",
        ["AI","HTML", "CSS",  "JavaScript", "Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "pickle"],
        "DiabetesHeatmap.png",
        "https://github.com/jstnguyen/DiabetesPredictiveModel"
    ),
    new Project(
        "Connect 4 AI In Python",
        "Connect 4 AI that uses the minimax algorithm with alpha-beta pruning to play Connect 4.",
        ["AI", "Python", "Pygame", "NumPy"],
        "Connect4.jpg",
        "https://github.com/jstnguyen/Connect4AIInPython"
    ),
    new Project(
        "Canva",
        "This repository contains selected Canva projects from various endeavors including jobs, internships, and more.",
        ["Canva"],
        "Canva.png",
        "https://github.com/jstnguyen/Canva"
    )
];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        const nextCard = templateCard.cloneNode(true); // copy the template card
        editCardContent(nextCard, project.title, project.description, project.features, project.image, project.link); // Edit title and image
        cardContainer.appendChild(nextCard); // add new card to the container
    }
}

function editCardContent(card, newTitle, newDescription, newFeatures, newImageURL, newLink) {
    card.style.display = "block";

    const cardHeader = card.querySelector(".title");
    cardHeader.textContent = newTitle;

    const cardDescription = card.querySelector(".description");
    cardDescription.textContent = newDescription;

    const cardFeatures = card.querySelector(".features");
    cardFeatures.textContent = "Features: " + newFeatures.join(", ");

    const cardImage = card.querySelector(".image");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const cardLink = card.querySelector(".project-link");
    cardLink.href = newLink; 
    cardLink.textContent = "View Project";
}

document.addEventListener("DOMContentLoaded", showCards);
