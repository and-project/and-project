public class MainApp {

    public static void main(String[] args) {

        Robot teakwonV = new TeakwonV();
        teakwonV.setAttack(new GenericAttack());
        teakwonV.setMove(new Work());

        Robot atom = new Atom();
        atom.setAttack(new GenericAttack());
        atom.setMove(new Fly());

        teakwonV.Attack();
        teakwonV.Move();

        atom.Move();
        atom.Attack();

        Robot sungard = new Sungard();
        sungard.setAttack(new MissileeAttack());
        sungard.setMove(new Fly());
        sungard.Attack();
        sungard.Move();

    }

}
