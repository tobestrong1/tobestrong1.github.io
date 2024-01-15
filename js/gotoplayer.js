package org.jaapelst.GotoPlayer;

import de.simonsator.partyandfriends.api.pafplayers.PAFPlayerManager;
import net.md_5.bungee.api.ProxyServer;
import net.md_5.bungee.api.plugin.Plugin;
import net.md_5.bungee.config.Configuration;
import net.md_5.bungee.config.ConfigurationProvider;
import net.md_5.bungee.config.YamlConfiguration;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;

import de.simonsator.partyandfriends.main.Main;
import org.jaapelst.GotoPlayer.api.tagManager;

public class GotoPlayer extends Plugin {

    public Configuration config;
    private tagManager tagmanager = new tagManager();


    @Override
    public void onEnable() {



        getLogger().info("Loaded GotoPlayer");

        getProxy().getPluginManager().registerCommand(this, new GotoCommand(this));



        if (!getDataFolder().exists())
            getDataFolder().mkdir();

        File file = new File(getDataFolder(), "config.yml");


        if (!file.exists()) {
            try (InputStream in = getResourceAsStream("config.yml")) {
                Files.copy(in, file.toPath());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        try {
            this.config = ConfigurationProvider.getProvider(YamlConfiguration.class).load(new File(getDataFolder(), "config.yml"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    /**
     * Get the tag manager
     * @return tag manager
     */
    public tagManager getTagManager() {
        return tagmanager;
    }


}
