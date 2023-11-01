
export default function isChasing(monName) {
    var isChasing = false;
    if (global.preferences.monsToChase.includes(monName)) {
        isChasing = true;
    }
    return isChasing;
}