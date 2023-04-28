import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MyWidget(),
    );
  }
}

// class MyWidget extends StatelessWidget {
//   const MyWidget({super.key});
// }

class MyWidget extends StatefulWidget {
  const MyWidget({super.key});

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  int counter = 0;

  TextEditingController textFieldController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Flutter demo"),
      ),
      body: Container(
        width: double.infinity,
        color: Colors.amber,
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Text("This is body",
                  style: TextStyle(fontSize: 25, color: Colors.white)),
              const SizedBox(
                height: 10,
              ),
              Text("$counter"),
              ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(foregroundColor: Colors.black),
                child: const Text("Button"),
              ),
              TextField(controller: textFieldController)
            ]),
      ),
      floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              counter++;
            });

            print(textFieldController.text);
          },
          child: const Icon(Icons.plus_one)),
    );
  }
}
