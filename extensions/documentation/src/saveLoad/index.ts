import { SaveDataHandler, extension } from "$common";
import { codeSnippet, notRelevantToExample } from "../../";

export const x = codeSnippet();

const name = "Example of Save/Load";

/**
 * IMPORTANT! Note the usage of "customSaveData" passed as an 'add on' 
 * in the second argument of the `extension` factory function.
 * This effectively 'adds on' to your extension the ability to save / load custom data. 
 */
export default class SaveLoadExample extends extension({ name }, "customSaveData") {

  /** This is an example of some data on an Extension 
   * that the user might manipulate over the course of their session 
   * and must be preserved in order to restore the same state to the extension */
  somePersistentData = { x: 3, input: "Hello" };

  /**
   * The SaveDataHandler constructor takes an object with 3 values:
   * - Extension: This should be a reference to the Extension class you are implementing. 
   *   This will then be used as the type for the first 'self' parameter of both `onSave` and `onLoad`.
   * - onSave: A function called when a user SAVES their project which should return some data (likely an object), 
   *   which will be written to the saved file.
   * - onLoad: A function called when a user LOADS a project. 
   *   The second parameter 'data' will take on the type of the thing that `onSave` returns. 
   *   This way, the two functions stay in sync.
   */
  override saveDataHandler = new SaveDataHandler({
    Extension: SaveLoadExample,
    // Return the information that we want to save
    onSave(self) { return self.somePersistentData },
    // Use the loaded 'data' to restore the state of our Extension
    onLoad(self, data) { self.somePersistentData = data },
  });


  init = notRelevantToExample;
  defineBlocks = notRelevantToExample;
}

x.end;