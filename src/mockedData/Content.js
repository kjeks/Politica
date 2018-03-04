export default function (id) {
    switch(id) {
        case 1:
            return {
                text: "This is the competitive mode, here you will be matched against equally skilled debators with different viewpoints"
            };
        case 2:
            return {
                text: "This is the tutor mode, here you can learn from more experienced debators or share your own knowledge"
            };
        case 3:
            return {
                text: "This is the discusson mode, here you can discuss your topic with like minded debators"
            }
        default:
            return null

    }
}