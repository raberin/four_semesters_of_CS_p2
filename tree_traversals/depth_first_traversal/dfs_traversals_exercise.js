/*
                8
              /   \
              3    10
            /  \      \
           1    6      14
              /  \     /
             4    7  13


Pre-order traversal - Process root -> left of root -> right of root
To convert this into an array:

1. Call our method (let's call it preorderTraverse) on the root node, 8.
2. Add 8 to our array.
3. Call preorderTraverse on the left child, 3.
4. Add 3 to our array.
5. Call preorderTraverse on the left child, 1.
6. Add 1 to our array.
7. Has no children, returns.
8. Going back up the tree, we'll call preorderTraverse on 6.
9. Add 6 to our array.
10. Call preorderTraverse on the left child, 4.
11. Add 4 to our array.
12. No children, returns.
13. Going back up the tree, we'll call preorderTraverse on 7.
14. Add 7 to the array.

We end up with the array of [8, 3, 1, 6, 4, 7, 10, 14, 13]. This is called preorder traversal.

In preorder traversal, you process the node, then recursively call the method on the left subtree and then the right subtree.
Pros: Useful for copying nodes since it starts at root node -> left subtree -> right subtree

In inorder traversal, you first recursively call the method on the left tree, then process the node, and then call the method on the right tree.
Pros: Useful for sorted lists starts at most left subtree -> root node -> right subtree

Postorder traversal, as you have guessed, you recursively call the method on the left subtree, then the right subtree, then you process the node. The results of these are as follows:
Pros: Useful for deleting lists starts at left subtree -> right subtree -> root node (Deletes all children before root node)

// preorder
[8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder
[1, 3, 4, 6, 7, 8, 10, 13, 14]

// postorder
[1, 4, 7, 6, 3, 13, 14, 10, 8]

*/

const preorderTraverse = (node, array) => {
  //Base case
  if (!node) return array;

  //Process the node
  array.push(node.value);
  //Recurse Left then right
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);
  //Return array
  return array;
};

const inorderTraverse = (node, array) => {
  //Base Case
  if (!node) return array;

  // Recurse Left
  array = inorderTraverse(node.left, array);
  // Process the node
  array.push(node.value);
  // Recurse Right
  array = inorderTraverse(node.right, array);
  // Return array
  return array;
};

const postorderTraverse = (node, array) => {
  //Base Case
  if (!node) return array;

  // Recurse Left
  array = postorderTraverse(node.left, array);
  // Recurse Right
  array = postorderTraverse(node.right, array);
  // Process the node
  array.push(node.value);
  // Return array
  return array;
};
