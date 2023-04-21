const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("sauce-code")
    .setDescription('dip into the sauce code')
    .addStringOption(option =>
		option.setName('user')
			.setDescription('who to dip in the sauce code')
			.setRequired(true)),
    async execute(interaction, client) {
        await interaction.reply(`${interaction.user} dips ${interaction.options.get('user').value} into the Sauce Code, making them open-source and licencing them under the Plush Launcher licence:
        
Hey ${interaction.options.get('user').value}, anyone can copy, modify, merge, publish, distribute, sublicense, and/or sell copies of you, unless you do /marketable

(this is a joke command, ${interaction.options.get('user').value} is not actually open-source unless they are)`);
    }
}
