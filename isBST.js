const isValid = (root, low, high) => {
  if(!root) {
      return true;
  }
  if(root.val <= low || root.val >= high) {
      return false;
  }
  return (isValid(root.left, low, root.val) && isValid(root.right, root.val, high));
  
}

const isValidBST = (root) => {
  return isValid(root, -Infinity, Infinity);
};

/*
Given a binary tree, check if it is a binary search tree (BST). A valid BST does not have to be complete or balanced.

Consider the below definition of a BST:

All nodes values of left subtree are less than or equal to parent node value
All nodes values of right subtree are greater than or equal to parent node value
Both left subtree and right subtree must be a BST
By definition, NULL tree is a BST
By definition, tree having a single node or leaf nodes are BST
I: binary tree
O: bool
C:
  - BST does not need to be complete or balanced
E:
  - null => true
  - leaf => true
  - single node => true

at node:
  - left subtree values all less= node value
    - if left subtree max is less than node, then all left subtree are less
      - right subtree values all greater=
    - if right subtree min is greater than node, than all are greater
  - left & right subtrees are BSTs in their own right


null => true
1 => true

  1 => false
2

  1 => false
0 
0  -3

  1
1   1

  3
1
  4


starting at root, process:
  - process root, then left subtree, then right subtree
  - process left subtree, right subtree, then root
  - inorder: left, root, right
*/