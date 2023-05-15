public class Atom implements Robot{

    private Attack attack;
    private Move move;

    @Override
    public void setAttack(Attack attack) {
        this.attack = attack;
    }

    @Override
    public void setMove(Move move) {
        this.move = move;
    }

    @Override
    public void Attack() {
        System.out.println(attack.attack());
    }

    @Override
    public void Move() {
        System.out.println(move.move());
    }

    @Override
    public String toString() {
        return "Atom{" +
                "attack=" + attack +
                ", move=" + move +
                '}';
    }
}
