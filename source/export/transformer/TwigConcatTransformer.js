'use strict';

/**
 * Requirements
 * @ignore
 */
const NodeTransformer = require('entoj-system').export.transformer.NodeTransformer;


/**
 * Transforms the nunjucks operator for string concatenation to the twig ~
 */
class TwigConcatTransformer extends NodeTransformer
{
    /**
     * @inheritDoc
     */
    static get className()
    {
        return 'export.transformer/TwigConcatTransformer';
    }


    /**
     * @inheritDoc
     */
    transformNode(node, transformer, options)
    {
        if (node.is('ExpressionNode'))
        {
            let index = 0;
            let count = node.children.length;
            for (; index < count; index++)
            {
                const currentNode = node.children[index];
                if (currentNode.is('OperandNode', { value: ['+']}) &&
                    ((currentNode.previous && (currentNode.previous.is('LiteralNode', { valueType: 'string'}) || currentNode.previous.is('FilterNode', { name: 'concat'}))) ||
                     (currentNode.next && currentNode.next.is('LiteralNode', { valueType: 'string'}))))
                {
                    // Change to tilde
                    currentNode.value = '~';

                    // Reset iteration
                    count = node.children.length;
                    index = 0;
                }
            }
        }
        return Promise.resolve(node);
    }
}

module.exports.TwigConcatTransformer = TwigConcatTransformer;
