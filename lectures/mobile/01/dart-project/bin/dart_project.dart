import 'package:dart_project/dart_project.dart' as dart_project;

void main(List<String> arguments) {
  print('Hello world: ${dart_project.calculate()}!');

  // Primitives
  int temp1 = 12;
  double temp2 = 12;
  String? temp3 = "hello";
  temp3.length;

  bool temp4 = true;
  dynamic temp5 = "world";

  const temp6 = "adsfjkl;";
  final temp7;
  temp7 = "asdfjkl;";

  // print("${temp5.runtimeType}");

  // Collections

  List<int> temp8 = [1, 2, 3];
  List<int> temp9 = List.filled(3, 0);

  temp9[0] = 10;
  // temp9.add(12);
  // temp9.remove(12);

  // print("${temp9}");

  Map<String, String> temp10 = {"name": "abc", "lastName": "def"};

  // print("${temp10["name"]}");

  // Control-flow
  // for (var i = 0; i < temp1; i++) {
  //   print("adad");
  // }

  // while (temp1 < 1) {
  //   print("woohoo");
  //   temp1--;
  // }

  // temp8.forEach((element) {
  //   print(element);
  // });

  // temp8.map((e) => null);

  // calculate(x: 1, y: 1);
  // calculate2(2, 3);
  // calculate3(4, 5);

  Person person1 = Person();
  person1.firstName = "A";
  person1.setFirstName2 = "asdfjkl;";
  person1.display();
  print(person1.getFirstName);

  try {
    int temp1 = 1;
    dynamic temp2 = "asdfjkl;";
    temp2 = temp2 + 123;
    temp1++;
  } on TypeError {
    print("ERROR: Not a subtype");
  } catch (error, stackTrace) {
    print("ERROR: $error");
    print(stackTrace);
  } finally {
    print("Done");
  }
}

// Funtions
void calculate({required int? x, required int? y}) {
  // if (x != null && y != null) {
  // print("${x} + ${y} = ${x + y} !!");
  // }

  print("${x} * ${y} = ${x! * y!} !!");
}

void calculate2(int x, [int y = 0]) {
  print(x * y);
}

void calculate3(int x, int y) => print(x * y);

class Person {
  String firstName = "unknown";
  String lastName = "unknown";

  void setFirstName(String name) {
    firstName = name;
  }

  set setFirstName2(String name) => firstName = name;

  String get getFirstName => firstName;

  void display() {
    print("${firstName} ${lastName}");
  }
}
